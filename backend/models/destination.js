const dbConfig = require('../config');
const Sequelize = require('sequelize')

const Destination = dbConfig.define('destination', {
    DestinationID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    DestinationName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    CostofLiving: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    QualityOfLifeRating: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    VisaRequirements: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    HealthcareInfo: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    SafetyRating: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Amenities: {
        type: Sequelize.TEXT,
        allowNull: false
    }
}, {timestamps: false});

module.exports = Destination;
