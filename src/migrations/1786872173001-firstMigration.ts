import { MigrationInterface, QueryRunner } from "typeorm";

export class FirstMigration1786872173001 implements MigrationInterface {
    name = 'FirstMigration1786872173001'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."movies_year_idx"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE INDEX "movies_year_idx" ON "movies" USING btree ("release_year") `);
    }

}
