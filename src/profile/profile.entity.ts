import { timestamp } from "rxjs";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Profile {
    @PrimaryGeneratedColumn()
        id: number;
    
    @Column({
        type: 'varchar', // check if the db is support varchar
        nullable: true,
        length: 100
    })
    firstName: string;

    @Column({
        type: 'varchar',
        nullable: true,
        length: 100
    })
    lastName: string;
    
    @Column({
        type: 'varchar',
        nullable: true,
        length: 10
    })
    gender: string;
    
    @Column({
        type: 'timestamp', // use datetime for mysql
        nullable: true
    })
    dateOfBirth: string

    @Column({
        type: 'text',
        nullable: true
    })
    bio: string

    @Column({
        type: 'text',
        nullable: true
    })
    profileImage: string
}