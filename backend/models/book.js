const createBook = (sequelize, DataTypes) => {
    const Book = sequelize.define('book', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        title: {
            type: DataTypes.STRING(50),
            allowNull: false
        },

        description: {
            type: DataTypes.TEXT,
            allowNull: false

        },

        author: {
            type: DataTypes.STRING(30),
            allowNull: false
        },

        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        url: {
            type: DataTypes.STRING,
            allowNull: false
        },

        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'users',
                key: 'id'
            }
        }
    });

    return Book;
};

export default createBook;
