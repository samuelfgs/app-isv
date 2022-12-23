import registerComponent, {
  ComponentMeta,
} from "@plasmicapp/host/registerComponent";
import AntdDropdown, {
  DropdownButtonProps,
  DropDownProps,
} from "antd/lib/dropdown";
import DropdownButton from "antd/lib/dropdown/dropdown-button";
import React from "react";
import { MenuItemProps, MenuProps, SubMenuProps, MenuDividerProps } from "antd/lib/menu";
import Menu from "antd/lib/menu/index";
import MenuDivider from "antd/lib/menu/MenuDivider";
import MenuItem from "antd/lib/menu/MenuItem";
import SubMenu from "antd/lib/menu/SubMenu";
import { ItemGroup, MenuItemGroupProps } from "rc-menu";


export class Dropdown extends React.Component<any> {
  render() {
    const finalProps = { ...this.props };
    finalProps.children =
      typeof this.props.children === "string" ? (
        <div>{this.props.children}</div>
      ) : (
        this.props.children
      );
    console.log("dale", this.props.menu);
    finalProps.menu =
        typeof this.props.menu?.props?.children === "string" ? (
          {
            items: [{
              key: 0,
              label: this.props.menu
            }]
          }
        ) : this.props.menu?.props?.children ? (
          {
            items: 
              this.props.menu?.props?.children.map((el: any, i: number) => ({
                key: i,
                label: el
              }))
            
          }
        ) : { items: [] }
    return <AntdDropdown {...finalProps}>{finalProps.children ?? null}</AntdDropdown>;
  }
}

export const dropdownMeta: ComponentMeta<DropDownProps> = {
  name: "AntdDropdown",
  displayName: "Antd Dropdown",
  props: {
    arrow: {
      type: "boolean",
      description: "Whether the dropdown arrow should be visible",
      defaultValueHint: false,
    },
    disabled: {
      type: "boolean",
      description: "Whether the dropdown menu is disabled",
      defaultValueHint: false,
    },
    menu: {
      type: "slot",
      defaultValue: [
        {
          type: "component",
          name: "AntdMenu",
        },
      ],
    },
    placement: {
      type: "choice",
      options: [
        "bottomLeft",
        "bottomCenter",
        "bottomRight",
        "topLeft",
        "topCenter",
        "topRight",
      ],
      description: "Placement of popup menu",
      defaultValueHint: "bottomLeft",
    },
    trigger: {
      type: "choice",
      options: ["click", "hover", "contextMenu"],
      description: "The trigger mode which executes the dropdown action",
      defaultValueHint: "hover",
    },
    visible: {
      type: "boolean",
      description: "Toggle visibility of dropdown menu in Plasmic Editor",
      editOnly: true,
      defaultValueHint: false,
    },
    children: {
      type: "slot",
      defaultValue: [
        {
          type: "text",
          value: "Dropdown",
        },
      ],
    },
  },
  importPath: "./components/code-components/Antd",
  importName: "Dropdown",
};

export function registerDropdown() {
  registerComponent(
    Dropdown,
    dropdownMeta
  );
}

export const dropdownButtonMeta: ComponentMeta<DropdownButtonProps> = {
  name: "AntdDropdownButton",
  displayName: "Antd Dropdown Button",
  props: {
    disabled: {
      type: "boolean",
      description: "Whether the dropdown menu is disabled",
      defaultValueHint: false,
    },
    icon: {
      type: "slot",
      hidePlaceholder: true,
    },
    menu: {
      type: "slot",
      allowedComponents: ["AntdMenu"],
      defaultValue: [
        {
          type: "component",
          name: "AntdMenu",
        },
      ],
    },
    placement: {
      type: "choice",
      options: [
        "bottomLeft",
        "bottomCenter",
        "bottomRight",
        "topLeft",
        "topCenter",
        "topRight",
      ],
      description: "Placement of popup menu",
      defaultValueHint: "bottomLeft",
    },
    size: {
      type: "choice",
      options: ["small", "medium", "large"],
      description: "Set the size of button",
      defaultValueHint: "medium",
    },
    trigger: {
      type: "choice",
      options: ["click", "hover", "contextMenu"],
      description: "The trigger mode which executes the dropdown action",
      defaultValueHint: "hover",
    },
    type: {
      type: "choice",
      options: ["default", "primary", "ghost", "dashed", "link", "text"],
      description: "Can be set to primary, ghost, dashed, link, text, default",
      defaultValueHint: "default",
    },
    visible: {
      type: "boolean",
      description: "Toggle visibility of dropdown menu in Plasmic Editor",
      editOnly: true,
      defaultValueHint: false,
    },
    children: {
      type: "slot",
      defaultValue: [
        {
          type: "text",
          value: "Dropdown",
        },
      ],
    },
  },
  importPath: "antd/es/dropdown/dropdown-button",
  importName: "DropdownButton",
  parentComponentName: "AntdDropdown",
  isDefaultExport: true,
};

export function registerDropdownButton() {
  registerComponent(
    DropdownButton,
    dropdownButtonMeta
  );
}

export const menuDividerMeta: ComponentMeta<MenuDividerProps> = {
  name: "AntdMenuDivider",
  displayName: "Antd Menu Divider",
  props: {
    dashed: {
      type: "boolean",
      description: "Whether line is dashed",
      defaultValueHint: false,
    },
  },
  importPath: "antd/lib/menu/MenuDivider",
  importName: "MenuDivider",
  isDefaultExport: true,
  parentComponentName: "AntdMenu",
};

export function registerMenuDivider() {
  registerComponent(MenuDivider, menuDividerMeta);
}

export const menuItemMeta: ComponentMeta<MenuItemProps> = {
  name: "AntdMenuItem",
  displayName: "Antd Menu Item",
  props: {
    danger: {
      type: "boolean",
      description: "Display the danger style",
      defaultValueHint: false,
    },
    disabled: {
      type: "boolean",
      description: "Whether disabled select",
      defaultValueHint: false,
    },
    key: {
      type: "string",
      description: "Unique ID of the menu item",
      defaultValue: "menuItemKey",
    },
    title: {
      type: "string",
      description: "Set display title for collapsed item",
    },
    children: {
      type: "slot",
      defaultValue: [
        {
          type: "text",
          value: "Option",
        },
      ],
    },
  },
  importPath: "antd/lib/menu/MenuItem",
  importName: "MenuItem",
  isDefaultExport: true,
  parentComponentName: "AntdMenu",
};

export function registerMenuItem() {
  registerComponent(MenuItem, menuItemMeta);
}

export const menuItemGroupMeta: ComponentMeta<MenuItemGroupProps> = {
  name: "AntdMenuItemGroup",
  displayName: "Antd Menu Item Group",
  props: {
    title: {
      type: "slot",
      defaultValue: [
        {
          type: "text",
          value: "Group",
        },
      ],
    },
    children: {
      type: "slot",
      allowedComponents: [
        "AntdMenuItem",
        "AntdMenuDivider",
        "AntdMenuItemGroup",
      ],
      defaultValue: [
        {
          type: "component",
          name: "AntdMenuItem",
        },
      ],
    },
  },
  importPath: "rc-menu",
  importName: "ItemGroup",
  parentComponentName: "AntdMenu",
};

export function registerMenuItemGroup() {
  registerComponent(ItemGroup, menuItemGroupMeta);
}

export const subMenuMeta: ComponentMeta<SubMenuProps> = {
  name: "AntdSubMenu",
  displayName: "Antd SubMenu",
  props: {
    disabled: {
      type: "boolean",
      description: "Whether sub-menu is disabled",
      defaultValueHint: false,
    },
    key: {
      type: "string",
      description: "Unique ID of the sub-menu",
      defaultValue: "subMenuKey",
    },
    title: {
      type: "slot",
      defaultValue: [
        {
          type: "text",
          value: "Sub-menu",
        },
      ],
    },
    children: {
      type: "slot",
      allowedComponents: [
        "AntdMenuItem",
        "AntdMenuDivider",
        "AntdMenuItemGroup",
        "AntdSubMenu",
      ],
      defaultValue: [1, 2].map((i) => ({
        type: "component",
        name: "AntdMenuItem",
        props: {
          key: `subMenuItemKey${i}`,
          children: [
            {
              type: "text",
              value: `Sub-menu item ${i}`,
            },
          ],
        },
      })),
    },
  },
  importPath: "antd/lib/menu/SubMenu",
  importName: "SubMenu",
  isDefaultExport: true,
  parentComponentName: "AntdMenu",
};

export function registerSubMenu() {
  registerComponent(SubMenu, subMenuMeta);
}

export const menuMeta: ComponentMeta<MenuProps> = {
  name: "AntdMenu",
  displayName: "Antd Menu",
  props: {
    expandIcon: {
      type: "slot",
      hidePlaceholder: true,
    },
    forceSubMenuRender: {
      type: "boolean",
      description: "Render submenu into DOM before it becomes visible",
      defaultValueHint: false,
    },
    inlineIndent: {
      type: "number",
      description: "Indent (in pixels) of inline menu items on each level",
      defaultValueHint: 24,
    },
    mode: {
      type: "choice",
      options: ["horizontal", "vertical", "inline"],
      description: "Type of menu",
      defaultValueHint: "vertical",
    },
    multiple: {
      type: "boolean",
      description: "Allows selection of multiple items",
      defaultValueHint: false,
    },
    openKeys: {
      type: "choice",
      editOnly: true,
      uncontrolledProp: "defaultOpenKeys",
      description: "Array with the keys of default opened sub menus",
      multiSelect: true,
      options: (componentProps) => {
        const options = new Set<string>();
        traverseReactEltTree(componentProps.children, (elt) => {
          if (elt?.type === SubMenu && typeof elt?.key === "string") {
            options.add(elt.key);
          }
        });
        return Array.from(options.keys());
      },
    },
    overflowedIndicator: {
      type: "slot",
      hidePlaceholder: true,
    },
    selectable: {
      type: "boolean",
      description: "Allows selecting menu items",
      defaultValueHint: true,
    },
    selectedKeys: {
      type: "choice",
      editOnly: true,
      uncontrolledProp: "defaultSelectedKeys",
      description: "Array with the keys of default selected menu items",
      multiSelect: true,
      options: (componentProps) => {
        const options = new Set<string>();
        traverseReactEltTree(componentProps.children, (elt) => {
          if (
            [SubMenu, MenuItem as any].includes(elt?.type) &&
            typeof elt?.key === "string"
          ) {
            options.add(elt.key);
          }
        });
        return Array.from(options.keys());
      },
    },
    subMenuCloseDelay: {
      type: "number",
      description: "Delay time to hide submenu when mouse leaves (in seconds)",
      defaultValueHint: 0.1,
    },
    subMenuOpenDelay: {
      type: "number",
      description: "Delay time to show submenu when mouse enters, (in seconds)",
      defaultValueHint: 0,
    },
    theme: {
      type: "choice",
      options: ["light", "dark"],
      description: "Color theme of the menu",
      defaultValueHint: "light",
    },
    triggerSubMenuAction: {
      type: "choice",
      options: ["hover", "click"],
      description: "Which action can trigger submenu open/close",
      defaultValueHint: "hover",
    },
    children: {
      type: "slot",
      allowedComponents: ["AntdMenuItem", "AntdMenuDivider", "AntdSubMenu"],
      defaultValue: [
        {
          type: "component",
          name: "AntdMenuItem",
        },
        {
          type: "component",
          name: "AntdSubMenu",
        },
      ],
    },
  },
  importPath: "antd/lib/menu/index",
  importName: "Menu",
  isDefaultExport: true,
};

export function registerMenu() {
  registerComponent(Menu, menuMeta);
}

type ReactElt = {
  children: ReactElt | ReactElt[];
  props: {
    children: ReactElt | ReactElt[];
    [prop: string]: any;
  } | null;
  type: React.ComponentType<any> | null;
  key: string | null;
} | null;

/**
 * Traverses the tree of elements from a `React.createElement`. Notice we can't
 * traverse elements created within the children's render function since this is
 * the tree before rendering.
 */
export function traverseReactEltTree(
  children: React.ReactNode,
  callback: (elt: ReactElt) => void
) {
  const rec = (elts: ReactElt | ReactElt[] | null) => {
    (Array.isArray(elts) ? elts : [elts]).forEach((elt) => {
      if (elt) {
        callback(elt);
        if (elt.children) {
          rec(elt.children);
        }
        if (elt.props?.children && elt.props.children !== elt.children) {
          rec(elt.props.children);
        }
      }
    });
  };
  rec(children as any);
}

export function registerAll() {
  registerMenu();
  registerMenuDivider();
  registerMenuItem();
  registerMenuItemGroup();
  registerSubMenu();
  registerDropdown();
  registerDropdownButton();
}