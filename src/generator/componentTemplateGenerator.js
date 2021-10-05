const componentJsTemplate = require("../templates/component/componentJsTemplate");

const componentTsTemplate = require("../templates/component/componentTsTemplate");

module.exports = function componentTemplateGenerator({
  cmd,
  componentName,
  cliConfigFile,
}) {
  const {
    cssPreprocessor,
    testLibrary,
    usesCssModule,
    usesTypeScript,
    testFolder,
  } = cliConfigFile;
  const { customTemplates } = cliConfigFile.component[cmd.type];
  let template = null;
  let filename = null;

  // Check for a custom component template.

  if (customTemplates && customTemplates.component) {
    // --- Load and use the custom component template

    const { template: customTemplate, filename: customTemplateFilename } =
      getCustomTemplate(componentName, customTemplates.component);

    template = customTemplate;
    filename = customTemplateFilename;
  } else {
    // --- Else use rncez built-in component template

    template = usesTypeScript ? componentTsTemplate : componentJsTemplate;
    filename = usesTypeScript ? `${componentName}.tsx` : `${componentName}.js`;

    // --- If test library is not Testing Library or if withTest is false. Remove data-testid from template
    if (testLibrary !== "Testing Library" || !cmd.withTest) {
      template = template.replace(` data-testid="TemplateName"`, "");
    }

    // --- If it has a corresponding stylesheet

    if (cmd.withStyle) {
      const module = usesCssModule ? ".module" : "";
      const cssPath = `${componentName}${module}.${cssPreprocessor}`;

      // --- If the css module is true make sure to update the template accordingly

      if (module.length) {
        template = template.replace(
          `'./TemplateName.module.css'`,
          `'./${cssPath}'`
        );
      } else {
        template = template.replace(
          `{styles.TemplateName}`,
          `"${componentName}"`
        );
        template = template.replace(
          `styles from './TemplateName.module.css'`,
          `'./${cssPath}'`
        );
      }
    } else {
      // --- If no stylesheet, remove className attribute and style import from jsTemplate

      template = template.replace(` className={styles.TemplateName}`, "");
      template = template.replace(
        `import styles from './TemplateName.module.css';`,
        ""
      );
    }
  }

  return {
    componentPath: `${cmd.path}/${componentName}/${filename}`,
    filename,
    template,
  };
};
