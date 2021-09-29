'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      { tableName: 'bootcamps', schema: 'devcamper' },
      [
        {
          id: Sequelize.literal('uuid_generate_v4()'),
          name: 'Devworks Bootcamp',
          description:
            'Devworks is a full stack JavaScript Bootcamp located in the heart of Boston that focuses on the technologies you need to get a high paying job as a web developer',
          website: 'https://devworks.com',
          phone: '(111) 111-1111',
          email: 'enroll@devworks.com',
          address: '233 Bay State Rd Boston MA 02215',
          careers: Sequelize.literal(
            `ARRAY['Web Development', 'UI/UX', 'Business']::devcamper.enum_bootcamps_careers[]`
          ),
          housing: true,
          jobAssistance: true,
          jobGuarantee: false,
          acceptGi: true,
          createdAt: Sequelize.literal('now()'),
          updatedAt: Sequelize.literal('now()'),
        },
        {
          id: Sequelize.literal('uuid_generate_v4()'),
          name: 'ModernTech Bootcamp',
          description:
            'ModernTech has one goal, and that is to make you a rockstar developer and/or designer with a six figure salary. We teach both development and UI/UX',
          website: 'https://moderntech.com',
          phone: '(222) 222-2222',
          email: 'enroll@moderntech.com',
          address: '220 Pawtucket St, Lowell, MA 01854',
          careers: Sequelize.literal(
            `ARRAY['Web Development', 'UI/UX', 'Mobile Development']::devcamper.enum_bootcamps_careers[]`
          ),
          housing: false,
          jobAssistance: true,
          jobGuarantee: false,
          acceptGi: true,
          createdAt: Sequelize.literal('now()'),
          updatedAt: Sequelize.literal('now()'),
        },
        {
          id: Sequelize.literal('uuid_generate_v4()'),
          name: 'Codemasters',
          description:
            'Is coding your passion? Codemasters will give you the skills and the tools to become the best developer possible. We specialize in full stack web development and data science',
          website: 'https://codemasters.com',
          phone: '(333) 333-3333',
          email: 'enroll@codemasters.com',
          address: '85 South Prospect Street Burlington VT 05405',
          careers: Sequelize.literal(
            `ARRAY['Web Development', 'Data Science', 'Business']::devcamper.enum_bootcamps_careers[]`
          ),
          housing: false,
          jobAssistance: false,
          jobGuarantee: false,
          acceptGi: false,
          createdAt: Sequelize.literal('now()'),
          updatedAt: Sequelize.literal('now()'),
        },
        {
          id: Sequelize.literal('uuid_generate_v4()'),
          name: 'Devcentral Bootcamp',
          description:
            'Is coding your passion? Codemasters will give you the skills and the tools to become the best developer possible. We specialize in front end and full stack web development',
          website: 'https://devcentral.com',
          phone: '(444) 444-4444',
          email: 'enroll@devcentral.com',
          address: '45 Upper College Rd Kingston RI 02881',
          careers: Sequelize.literal(
            `ARRAY['Mobile Development', 'Web Development', 'Data Science', 'Business']::devcamper.enum_bootcamps_careers[]`
          ),
          housing: false,
          jobAssistance: true,
          jobGuarantee: true,
          acceptGi: true,
          createdAt: Sequelize.literal('now()'),
          updatedAt: Sequelize.literal('now()'),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete(
      { tableName: 'bootcamps', schema: 'devcamper' },
      null,
      {}
    );
  },
};
