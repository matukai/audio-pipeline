###Welcome to Audio Pipeline!

### CREATE DATABASE LOCALLY
-In Postgres
	- create user 'user' with password 'super secret password';
	- create database 'database name' with owner 'user';

-In server
	-create a config file directory
  -create index.js
	-In config file create a module export with 'user', 'password', 'database'

	-fill in credentials for your local database
	
Example:
module.exports = {
	user: 'user',
	password: 'password',
	database: 'database name'
}