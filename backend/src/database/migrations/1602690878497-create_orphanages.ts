import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createOrphanages1602690878497 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    //realizar alteraçãoes (criar tabela, novo campo, deletar campo...)
    await queryRunner.createTable(new Table({
      name: 'orphanages',
      columns: [
        {
          name: 'id',
          type: 'integer',
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment'
        },
        {
          name: 'name',
          type: 'varchar'
        },
        {
          name: 'latitude',
          type: 'decimal',
          scale: 10,
          precision: 2
        },
        {
          name: 'longitude',
          type: 'decimal',
          scale: 10,
          precision: 2
        },
        {
          name: 'about',
          type: 'text'
        },
        {
          name: 'instructions',
          type: 'text'
        },
        {
          name: 'opening_hours',
          type: 'varchar'
        },
        {
          name: 'open_on_weekends',
          type: 'boolean',
          default: false
        }
      ]
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    //desfazer tudo que foi feito no up
    await queryRunner.dropTable('orphanages');
  }

}
