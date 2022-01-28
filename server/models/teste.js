
module.exports=(sequelize, DataTypes) => {
    const teste=sequelize.define('teste', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
          },
        nome: DataTypes.STRING,
        email: DataTypes.STRING
    }, {
        tableName: 'teste',
        timestamp: false,
        createdAt: false,
        updatedAt: false
      })

      return teste
}