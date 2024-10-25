export interface TSidebar {
  id: number;
  icon: string;
  href: string;
}

export const sideBar = [
  {
    id: 1,
    icon: 'group',
    href: '/users',
  },
  {
    id: 2,
    icon: 'format_list_bulleted',
    href: '/list',
  },
  {
    id: 3,
    icon: 'keyboard_command_key',
    href: '/adds',
  },
  {
    id: 4,
    icon: 'settings',
    href: '/settings',
  },
] as TSidebar[];
