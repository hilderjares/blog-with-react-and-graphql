# Migration `20200423042725-user-password`

This migration has been generated at 4/23/2020, 4:27:25 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE `mydb`.`User` ADD COLUMN `password` varchar(191) NOT NULL  ;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200423042145-initial..20200423042725-user-password
--- datamodel.dml
+++ datamodel.dml
@@ -3,9 +3,9 @@
 // 
 datasource db {
   provider = "mysql"
-  url = "***"
+  url      = env("DATABASE_URL")
 }
 generator client {
   provider = "prisma-client-js"
@@ -26,8 +26,9 @@
 model User {
   id    Int     @id @default(autoincrement())
   email String  @unique
   name  String?
+  password String
   posts Post[]
 }
 model Category {
```


