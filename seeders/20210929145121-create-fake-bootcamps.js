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
      'bootcamps',
      [
        {
          name: 'Devworks Bootcamp',
          description:
            'Devworks is a full stack JavaScript Bootcamp located in the heart of Boston that focuses on the technologies you need to get a high paying job as a web developer',
          website: 'https://devworks.com',
          phone: '(111) 111-1111',
          email: 'enroll@devworks.com',
          address: '233 Bay State Rd Boston MA 02215',
          careers: ['Web Development', 'UI/UX', 'Business'],
          housing: true,
          jobAssistance: true,
          jobGuarantee: false,
          acceptGi: true,
        },
        {
          name: 'ModernTech Bootcamp',
          description:
            'ModernTech has one goal, and that is to make you a rockstar developer and/or designer with a six figure salary. We teach both development and UI/UX',
          website: 'https://moderntech.com',
          phone: '(222) 222-2222',
          email: 'enroll@moderntech.com',
          address: '220 Pawtucket St, Lowell, MA 01854',
          careers: ['Web Development', 'UI/UX', 'Mobile Development'],
          housing: false,
          jobAssistance: true,
          jobGuarantee: false,
          acceptGi: true,
        },
        {
          name: 'Codemasters',
          description:
            'Is coding your passion? Codemasters will give you the skills and the tools to become the best developer possible. We specialize in full stack web development and data science',
          website: 'https://codemasters.com',
          phone: '(333) 333-3333',
          email: 'enroll@codemasters.com',
          address: '85 South Prospect Street Burlington VT 05405',
          careers: ['Web Development', 'Data Science', 'Business'],
          housing: false,
          jobAssistance: false,
          jobGuarantee: false,
          acceptGi: false,
        },
        {
          name: 'Devcentral Bootcamp',
          description:
            'Is coding your passion? Codemasters will give you the skills and the tools to become the best developer possible. We specialize in front end and full stack web development',
          website: 'https://devcentral.com',
          phone: '(444) 444-4444',
          email: 'enroll@devcentral.com',
          address: '45 Upper College Rd Kingston RI 02881',
          careers: [
            'Mobile Development',
            'Web Development',
            'Data Science',
            'Business',
          ],
          housing: false,
          jobAssistance: true,
          jobGuarantee: true,
          acceptGi: true,
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
    await queryInterface.bulkDelete('bootcamps', null, {});
  },
};
