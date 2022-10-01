'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('blog_posts', 'user_id', { 
      type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users', // tabela
          key: 'id' // coluna
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('blog_posts', 'user_id');
  }
};
