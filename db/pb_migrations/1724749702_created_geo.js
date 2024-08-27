/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "13rswpr40deglpb",
    "created": "2024-08-27 09:08:22.949Z",
    "updated": "2024-08-27 09:08:22.949Z",
    "name": "geo",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "aqiqraq8",
        "name": "lat",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "wpfee7ap",
        "name": "lng",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("13rswpr40deglpb");

  return dao.deleteCollection(collection);
})
