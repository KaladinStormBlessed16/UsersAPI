const routes = [{
        path: '/',
        component: () =>
            import ('layouts/MainLayout.vue'),
        children: [{
            path: '',
            component: () =>
                import ('pages/Index.vue')
        }]
    },

    {
        path: '/edit/:id',
        component: () =>
            import ('layouts/MainLayout.vue'),
        children: [{
            path: '',
            component: () =>
                import ('components/Edit.vue')
        }]
    },

    {
        path: '/create',
        component: () =>
            import ('layouts/MainLayout.vue'),
        children: [{
            path: '',
            component: () =>
                import ('components/Create.vue')
        }]
    },

    {
        path: '*',
        component: () =>
            import ('pages/Error404.vue')
    }
]

export default routes