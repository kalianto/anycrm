const permissions = [
  {
    id: 1,
    title: 'Groups Permission',
    description: 'Permission to create, read, update and delete groups',
    permission: 'group-policy',
    availableRules: ['create', 'read', 'update', 'delete'],
  },
  {
    id: 2,
    title: 'Users Permission',
    description: 'Permission to create, read, update and delete users',
    permission: 'user-policy',
    availableRules: ['create', 'read', 'update', 'delete'],
  },
];

export default permissions;
