import { MigrationInterface, QueryRunner } from "typeorm";

export class FirstMigration1786635146368 implements MigrationInterface {
    name = 'FirstMigration1786635146368'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."movies_year_idx"`);
        await queryRunner.query(`ALTER TABLE "movies" ALTER COLUMN "uuid" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "movies" ALTER COLUMN "poster_url" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "movies" ALTER COLUMN "language" SET NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movies" ALTER COLUMN "language" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "movies" ALTER COLUMN "poster_url" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "movies" ALTER COLUMN "uuid" SET DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`CREATE INDEX "movies_year_idx" ON "movies" USING btree ("release_year") `);
    }

}
