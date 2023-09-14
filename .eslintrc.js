module.exports = {
    extends: ['@gravity-ui/eslint-config', '@gravity-ui/eslint-config/prettier'],
    root: true,
    rules: {
        'no-param-reassign': 'off',
        'import/order': [
            'error',
            {
                alphabetize: {
                    order: 'asc',
                },
                'newlines-between': 'always',
                groups: [['builtin', 'external'], 'internal', 'parent', 'sibling', 'index'],
                warnOnUnassignedImports: true,
                pathGroups: [
                    {
                        pattern: '*.s?css$',
                        group: 'index',
                    },
                ],
            },
        ],
    },
    overrides: [
        {
            files: ['!src/**/*', '!demo/**/*'],
            env: {
                node: true,
            },
        },
    ],
};