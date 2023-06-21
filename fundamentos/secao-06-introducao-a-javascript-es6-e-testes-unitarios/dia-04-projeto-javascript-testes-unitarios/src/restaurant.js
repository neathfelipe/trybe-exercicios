/* eslint-disable max-len */
// Siga as orientações do README!

const createMenu = (object) => {
  const menu = {
    fetchMenu: () => object,
    consumption: [],
    order: (item) => {
      if (!object.food[item] && !object.drinks[item]) {
        return 'Item indisponível';
      }
      menu.consumption.push(item);
    },
    pay: () => {
      let total = 0;
      for (let index = 0; index < menu.consumption.length; index += 1) {
        const item = menu.consumption[index];
        if (object.food[item]) {
          total += object.food[item];
        } else if (object.drinks[item]) {
          total += object.drinks[item];
        }
      }
      return total * 1.1;
    },
  };
  return menu;
};

module.exports = createMenu;
