module.exports = (sequelize, DataTypes) => {
    const Content = sequelize.define('content', {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
        },
        text: {
            type: DataTypes.TEXT,
            allowNull: false,

        },
        video: {
            type: DataTypes.STRING,
            defaultValue: '',
        },
        link: {
            type: DataTypes.STRING,
            defaultValue: '',
        },
        likes: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        status: {
            type: DataTypes.ENUM('public', 'private'),
            defaultValue: 'public'
        },
        published: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    });

    return Content;
}
