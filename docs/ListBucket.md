## Updating S3 Objects List

### Login to CF CLI

1. Make sure you have the Cloud Foundry CLI installed
2. Enter `cf login -a api.fr.cloud.gov --sso`
3. It’ll say `One Time Code ( Get one at https://login.fr.cloud.gov/passcode )` – visit this login link in your browser.
4. Login via Cloud.gov
5. Enter given "Temporary Authentication Code" into terminal

### Get the service key

1. Enter `cf s` to list services
2. Enter `cf sk ${service name}` to list service keys for specified service
3. Enter `cf service-key ${service name} ${service key name}` to show the service key credentials
4. Copy and paste service key into a file named `AWS-Config.json` in the root directory

### Run node script

1. Enter `node ListBucket.js` while in root directory
