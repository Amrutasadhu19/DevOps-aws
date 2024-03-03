# Dockerrize nodeJs project (Wanderlust)

This is a Dockerized Node.js project. Follow the steps below to clone and run the project.

## Prerequisites

Ensure you have the following installed on your system:

- Git
- Docker

## Clone the Repository

First, clone the repository to your local machine. Open your terminal and run:

```bash
git clone git@github.com:Amrutasadhu19/DevOps-aws.git
```

### RUN THIS PROJECT BY BELOW COMMANDS 

- 1. Build the Docker Image
```bash
docker build -t <your-image-name> .
```
- 2. Run the Docker container
```bash
docker run -d -p 8080:8080 <your-image-name>
```

Now, your Node.js application should be running at `http://localhost:8080/listings/new`.

Now you need to open any browser and search above URL!!!
