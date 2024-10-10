import { TSidebarItem, TUserPath } from "@/type/paths.type";

export const sidebarItemsGenerator = (items: TUserPath[]) => {
  const sidebarItems = items.reduce((acc: TSidebarItem[], item) => {
    if (item.href && item.label) {
      acc.push({
        href: item.href,
        label: item.label,
        icon: item.icon,
      });
    }

    // if (item.children && item.children.length > 0) {
    //   acc.push({
    //     icon: item.icon,
    //     label: item.label,
    //     children: item.children.map((childitem) => {
    //       if (childitem.label && childitem.href && childitem.icon) {
    //         return {
    //           href: childitem.href ,
    //           icon: childitem.icon,
    //           label: childitem.label,
    //         };
    //       }
    //     }),
    //   });
    // }

    return acc;
  }, []);

  return sidebarItems;
};
