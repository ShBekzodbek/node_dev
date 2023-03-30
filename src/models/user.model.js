module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        about: {
            type: DataTypes.TEXT
        },
        email: {
            type: DataTypes.STRING(250),
            allowNull: false,
            unique: true,
            validate: { isEmail: true }
        },
        password: {
            type: DataTypes.STRING(10),
            allowNull: false,
        },
        followers: {
            type: DataTypes.ARRAY(DataTypes.UUID),

        },
        follows: {
            type: DataTypes.ARRAY(DataTypes.UUID),
        },
        likes: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        status: {
            type: DataTypes.ENUM('admin', 'user', 'ban'),
            defaultValue: 'user'
        }
    });
    return User;
}
