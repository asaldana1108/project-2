const { Post } = require('../models');

const postdata = [
    {
        title: 'The Dark Tower: Song of Susannah',
        post_url: 'https://www.amazon.com/gp/product/B000FC1QM4?ref_=dbs_m_mng_rwt_calw_5&storeType=ebooks',
        user_id: 1
    },
    {
        title: 'The Dark Tower',
        post_url: 'https://www.amazon.com/gp/product/B000FC294I?ref_=dbs_m_mng_rwt_calw_6&storeType=ebooks',
        user_id: 2
    },
    {
        title: 'The Dark Tower: The Drawing of the Three',
        post_url: 'https://www.amazon.com/gp/product/B018ER7IRI?ref_=dbs_m_mng_rwt_calw_1&storeType=ebooks',
        user_id: 3
    },
    {
        title: 'The Dark Tower: The Gunslinger',
        post_url: 'https://www.amazon.com/gp/product/B018ER7JRC?ref_=dbs_m_mng_rwt_calw_0&storeType=ebooks',
        user_id: 4
    },
    {
        title: 'The Dark Tower: The Waste Lands',
        post_url: 'https://www.amazon.com/gp/product/B018ER7IR8?ref_=dbs_m_mng_rwt_calw_2&storeType=ebooks',
        user_id: 5
    },
    {
        title: 'The Dark Tower: The Wind Through the Keyhole',
        post_url: 'https://www.amazon.com/gp/product/B005GG0MTC?ref_=dbs_m_mng_rwt_calw_7&storeType=ebooks',
        user_id: 6
    },
    {
        title: 'The Dark Tower: Wizard and Glass',
        post_url: 'https://www.amazon.com/gp/product/B018ER7IMS?ref_=dbs_m_mng_rwt_calw_3&storeType=ebooks',
        user_id: 7
    },
    {
        title: 'The Dark Tower: Wolves of the Calla',
        post_url: 'https://www.amazon.com/gp/product/B000FC0VEI?ref_=dbs_m_mng_rwt_calw_4&storeType=ebooks',
        user_id: 8
    },
    {
        title: 'The Girl with the Dragon Tattoo',
        post_url: 'https://www.amazon.com/gp/product/B0015DROBO/ref=dbs_a_def_rwt_hsch_vapi_tkin_p1_i0',
        user_id: 9
    },
    {
        title: 'The Girl Who Played with Fire',
        post_url: 'https://www.amazon.com/gp/product/B001NLKT60/ref=dbs_a_def_rwt_hsch_vapi_tkin_p1_i1',
        user_id: 10
    },
    {
        title: `The Girl Who Kicked the Hornet's Nest`,
        post_url: 'https://www.amazon.com/gp/product/B0031YJFCQ/ref=dbs_a_def_rwt_hsch_vapi_tkin_p1_i2',
        user_id: 11
    },
    {
        title: 'Heir to the Empire',
        post_url: 'https://www.amazon.com/Timothy-Zahn-ebook/dp/B00513HX7Y/ref=sr_1_3?crid=2KWF70794BZTH&dchild=1&keywords=heir+to+the+empire&qid=1598564624&s=digital-text&sprefix=hier+to+the+%2Cdigital-text%2C210&sr=1-3',
        user_id: 12
    },
    {
        title: 'Dark Force Rising',
        post_url: 'https://www.amazon.com/Dark-Force-Rising-Legends-Trilogy-ebook/dp/B00513HKF4/ref=sr_1_13?crid=2KWF70794BZTH&dchild=1&keywords=heir+to+the+empire&qid=1598564624&s=digital-text&sprefix=hier+to+the+%2Cdigital-text%2C210&sr=1-13',
        user_id: 13
    },
    {
        title: 'The Last Command',
        post_url: 'https://www.amazon.com/Last-Command-Legends-Thrawn-Trilogy-ebook/dp/B00513HJXC/ref=sr_1_9?crid=2KWF70794BZTH&dchild=1&keywords=heir+to+the+empire&qid=1598564624&s=digital-text&sprefix=hier+to+the+%2Cdigital-text%2C210&sr=1-9',
        user_id: 14
    },
    {
        title: 'Vector Prime',
        post_url: 'https://www.amazon.com/Vector-Prime-Star-Wars-Order-ebook/dp/B000FBFNQA/ref=sr_1_3?crid=2RHDM7A3GWEP3&dchild=1&keywords=vector+prime&qid=1598565401&s=digital-text&sprefix=vectir%2Cdigital-text%2C209&sr=1-3',
        user_id: 15
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;