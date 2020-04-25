# Migration `20200423042145-initial`

This migration has been generated at 4/23/2020, 4:21:45 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE `mydb`.`Category` (
    `id` int NOT NULL  AUTO_INCREMENT,
    `name` varchar(191) NOT NULL  ,
    PRIMARY KEY (`id`)
) 
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

ALTER TABLE `mydb`.`Post` ADD COLUMN `categoryId` int  ,
ADD COLUMN `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ;

CREATE UNIQUE INDEX `Category.name` ON `mydb`.`Category`(`name`)

ALTER TABLE `mydb`.`Post` ADD FOREIGN KEY (`categoryId`) REFERENCES `mydb`.`Category`(`id`) ON DELETE SET NULL ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200423042145-initial
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,38 @@
+// 
+// Prisma Schema Model
+// 
+
+datasource db {
+  provider = "mysql"
+  url      = env("DATABASE_URL")
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model Post {
+  id          Int       @id @default(autoincrement())
+  title       String
+  content     String?
+  published   Boolean   @default(value: false)
+  createdAt   DateTime  @default(now())
+  author      User?     @relation(fields: [authorId], references: [id])
+  authorId    Int?
+  category    Category? @relation(fields: [categoryId], references: [id])
+  categoryId  Int?
+}
+
+model User {
+  id    Int     @id @default(autoincrement())
+  email String  @unique
+  name  String?
+  posts Post[]
+}
+
+model Category {
+  id    Int     @id @default(autoincrement())
+  name  String  @unique
+  posts Post[]
+}
+
```


