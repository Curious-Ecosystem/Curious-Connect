# Curious Connect - Documentation

Please follow these documentation to setup this project for development work

## Dependencies

Use the website [Node JS](https://nodejs.org/en/download/current) to install Node Js in your PC.
Use the website [Postman](https://nodejs.org/en/download/current) to install Postman in your PC for API Testing.

## Project Setup Steps
### Clone The Project

```bash
git clone https://github.com/Curious-Ecosystem/Curious-Connect.git
```

### Go Inside Project And Take The Latest Pull
```bash
git pull
```

### Install the Node Modules

```bash
yarn install
```

<div style="color:red">

##### Note: If You are working in Media Service and having a problem in installing mediasoup Library Run the given command. (For Windows) 
```bash
yarn install-mediasoup
```
##### If You are still facing issue, Please Contact Project Admin
</div>


### Run The React APP

```bash
yarn start
```
### Run The Required Backend Service

```bash
yarn auth
yarn meet
yarn signal
yarn media
```
## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)