import { Profile } from "src/profile/profile.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id ?: number;

    @Column({
        type: 'varchar',
        nullable: false,
        length: 20,
        unique: true
    })
    username: string;

    @Column({
        type: 'varchar',
        nullable: false,
        length: 100,
        unique: true
    })
    email: string;

    @Column({
        type: 'varchar',
        nullable: false,
        length: 100
    })
    password: string;

    @OneToOne(() => Profile, { 
        cascade: ['insert'],
        eager: true // for getting profile with user using eager loading
    }) // profile to user -> user table have profileId field
    @JoinColumn() // This makes User the owner of the relationship
    profile?: Profile | undefined;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}