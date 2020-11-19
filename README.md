## Simple crud apis for simple CRM.
CRM is using express router and mongodb for database operations. To update or get configuration values refer .env file in the root location.

### Directory Structure
- controllers/
   - clientsController.js
   - leadsController.js
   - salesController.js
- models/
   - client.js
   - lead.js
   - sale.js
- routes/
   - clientRouter.js
   - index.js
   - leadRouter.js
   - saleRouter.js
- app.js
- package.json
- README.md
- .env


### .env file
MONGO_DB_URL=mongodb://<hostname>:<mongodb-port-number>/<dbname>
SERVER_PORT=<server-port-number>

### New route
After creating new route file include it into routes/index.js
