# Residents Heatmap Project

## Pre-requisites to run the project
- NPM and Node installed. To develop it was used Node 14.6.0 and NPM 6.14.11
- Java 15
- Maven
- MySQL
- Eclipse IDE (optional, useful to run the backend)

## Setup

After cloning the project, you'll need a few setups to have it running on your machine

### MySQL Setup
- You'll have to create(if you don't already have it) a connection to *localhost:3306* in you MySQL.
- On the file */server/src/main/resources/application.properties* you'll need to change *user* and *password* to your local connection credentials.
- On MYSQL, create a schema called *residencesdb*, you can run the following script:
##### `CREATE SCHEMA residencesdb`

### Server Setup
- There is 2 options here, making the setup with the Eclipse IDE, or via terminal:

#### Using Terminal for setup
- Go to the project folder in the terminal
##### `cd *<your-local-project-path>*/residents-heatmap/server`
- Install maven dependencies
##### `mvn clean install`
- If all is good so far, then run the backend server:
##### `mvn spring-boot:run`

#### Using Eclipse IDE
- Open Eclipse IDE
- Go to File -> Import -> Maven -> Import existing Maven Projects
- Choose the /server folder
- Click on Finish
- Wait for the dependencies to be installed (Note: If you have all setup working(Java, Maven) on your computer, and there are errors on installing dependencies, disable your Firewall, then right click the project, Maven -> Update Project).
- Right click on the file */server/src/main/java/com/heatmapproject/residences/ResidencesApplication.java, *Run As -> Java Application*

### Client Setup
- First, you'll have to create a *.env* file on the client folder {your-local-project-path}/residents-heatmap/client
- You'll need a GOOGLE_API_KEY to have the map working in the project
- On the .env file, add this 2 lines:
PORT=8081
REACT_APP_GOOGLE_API_KEY=**YOUR GOOGLE_API_KEY**

- Then, on your terminal, go to the clients folder
##### `cd {your-local-project-path}/residents-heatmap/client`
- Install the npm libraries
##### `npm install`
- After installation, you'll run the application
##### `npm start`
- Your browser should open at *http://localhost:8081* and you'll se the project running.
