module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [
            2,
            'always',
            [
                '[โจ feat]',
                '[๐ง WIP]',
                '[๐ fix]',
                '[๐ release]',
                '[๐ CSS]',
                '[๐ฌ text]',
                '[โป๏ธ refactor]',
                '[๐๏ธ critical fix]',
                '[๐ docs]',
                '[๐ perf]',
                '[๐ chores]',
                '[๐งช test]',
                '[๐ท build]',
                '[๐ New]',
                '[๐๏ธ archi]',
                '[๐จ styles]',
                '[โ๏ธ ci]',
                '[๐ง config]',
                '[๐ merge]',
                '[๐ฑ assets]',
                '[๐ฝ๏ธ external]',
                '[๐ฉ ....]',
                '[๐ฑ responsive]',
                '[๐ clean]',
                '[๐ review]',
                '[๐ docker]',
                '[๐๏ธ SEO]',
                '[๐ metier]',
                '[๐ฅ easter]',
                '[โ๏ธ POC]',
                '[๐๏ธ BDD]',
                '[โช๏ธ revert]',
                '[๐ข deploy]',
                '[๐ฆ๏ธ package]',
                '[โ add deps]',
                '[โ remove deps]',
            ],
        ],
    },
};

