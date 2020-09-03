const path = require('path');
const express = require('express');
const routes = require('./controllers');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helper');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');
const hbs = exphbs.create({ helpers});

const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// set up express session and connect session to Sequelize db
const sess = {
	secret            : 'super secret',//process.env.SESS_SECRET,
	// timeout cookie after 1 hr
	cookie            : {maxAge: 3600000},
	resave            : false,
	saveUninitialized : true,
	store             : new SequelizeStore({
		db : sequelize
	})
};

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

// sequelize.sync({ force: true }).then(() => {
sequelize.sync({ force: false }).then(() => {
	app.listen(PORT, () => console.log(`Now listening on PORT ${PORT}`));
});