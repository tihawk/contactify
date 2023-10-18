# Contactify app

## Instructions

1. Clone repo `git clone git@github.com:tihawk/contactify.git`.
2. Create `.env` file in `contacfity/contactify-quark/.env` and populate with database credentials as seen in `.env_template`. Example JWT keys are provided with the repo, so unnecessary to generate.
3. Check if `REACT_APP_API_URL=http://localhost:8080` inside `contacfity/contactify-react/.env` points to the correct location the Quarkus backend is running.
4. Go to the `contactify` directory, and run the `build.sh` script.
5. To run Quarkus backend jar, run `java -jar contactify-quark/build/quarkus-app/quarkus-run.jar`.
6. To serve React frontend build, run `serve -s contactify-react/build` (if you don't have serve, install with `npm install -g serve`).