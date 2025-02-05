/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('book', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Author: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Price: {
      type: DataTypes.STRING,
      allowNull: false
    },
    MakeSource: {
      type: DataTypes.STRING,
      allowNull: false
    },
    BookCategoryId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Inventory: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    IsDeleted: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsSoldOut: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CreatedDate: {
      type: DataTypes.TIME,
      allowNull: true
    },
    UpdatedDate: {
      type: DataTypes.TIME,
      allowNull: true
    }
  }, {
    tableName: 'book'
  });

  Model.associate = function() {

  }

  return Model;
};
