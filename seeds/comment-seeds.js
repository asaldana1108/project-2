const { Comment } = require('../models');

const commentdata = [
    {  
        comment_text: 'Nulla id gravida justo, venenatis pretium quam. Etiam ut elit in eros lacinia ultrices. ',
        user_id: 20,
        post_id:  1
    },  
    {  
        comment_text: 'Morbi cursus mattis mollis. Vestibulum at lorem sit amet nulla interdum tempor ut et ligula. Vestibulum eget dui at tortor gravida ultrices.',
        user_id: 19,
        post_id: 1
    },  
    {  
        comment_text: 'Mauris vel tortor justo. Nulla facilisi. Pellentesque est libero, hendrerit non volutpat eu, pulvinar id neque. Vivamus suscipit vehicula euismod.',
        user_id: 18,
        post_id: 1
    },  

    {  
        comment_text: 'Nunc nisi ipsum, facilisis id orci eu, consectetur malesuada augue. In id purus dapibus, varius lectus sit amet, fermentum purus. Ut vel tristique augue.',
        user_id: 17,
        post_id: 2
    },  
    {  
        comment_text: 'Aenean at varius odio, tincidunt dignissim lorem. Vivamus cursus nulla dui. Pellentesque malesuada tempus est, nec ornare sem elementum.',
        user_id: 16,
        post_id: 2
    },  
    {  
        comment_text: 'Etiam magna ex, condimentum vel felis sit amet, efficitur sagittis enim. Integer tincidunt vitae elit sed hendrerit. Aliquam non tortor.',
        user_id: 15,
        post_id:  2
    },  
    {  
        comment_text: 'Donec nibh nisi, aliquam feugiat dictum.',
        user_id: 14,
        post_id: 3
    },  
    {  
        comment_text: 'Cras ultricies elit vitae lorem posuere pulvinar. Integer molestie nulla eu ultrices ornare. Nam aliquet sapien in felis iaculis.',
        user_id: 13,
        post_id: 3
    },  
    {  
        comment_text: 'Morbi metus diam, congue ac pulvinar eget.  Fusce at laoreet ex. Nulla gravida tempus libero molestie tempus. Phasellus.',
        user_id: 12,
        post_id: 3
    },  
    {  
        comment_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Phasellus vehicula, justo a auctor iaculis.',
        user_id: 11,
        post_id: 4
    },  
    {  
        comment_text: 'Suspendisse in aliquam nisi. In facilisis nisi nec felis lobortis dapibus. Uris, malesuada non dignissim sit amet, ultricies vel.',
        user_id: 10,
        post_id: 4
    },  
    {  
        comment_text: 'Suspendisse ullamcorper nisi non iaculis porttitor. Curabitur sollicitudin finibus scelerisque. Sed quam mauris, vehicula quis dolor ac, iaculis pellentesque.',
        user_id: 9,
        post_id: 4
    },  
    {  
        comment_text: 'Morbi porttitor, nulla nec varius condimentum, dolor ipsum egestas felis, on faucibus sem. In nec sodales urna, a venenatis.',
        user_id: 8,
        post_id: 5
    },  
    {  
        comment_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit, nibh ac luctus pretium, velit justo maximus velit, nec efficitur justo ex nec ex. Phasellus.',
        user_id: 6,
        post_id: 5
    },  
    {
        comment_text: 'Proin maximus sed lacus nec fringilla. Vivamus consectetur a nulla sagittis rutrum. Praesent semper neque quis finibus placerat. Nullam sit amet sem vitae.',
        user_id: 5,
        post_id: 5
    },  
    {  
        comment_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit, nibh ac luctus pretium, velit justo maximus velit, nec efficitur justo ex nec ex. Phasellus.',
        user_id: 4,
        post_id: 6
    },  
    {  
        comment_text: 'Sed nunc leo, feugiat nec mauris id, euismod convallis quam. Fusce sit amet tristique ipsum. Nulla massa nibh, mollis vitae pellentesque eu, rutrum id orci.',
        user_id: 3,
        post_id: 6
    },
    {
        comment_text: 'Nunc tortor turpis, laoreet non tellus eu, pretium fermentum. vulputate vitae enim nec, facilisis eleifend ligula. Donec enim elit, vestibulum.',
        user_id: 2,
        post_id: 6
    },
    {
        comment_text: 'Maecenas nec diam blandit magna molestie ultrices. Duis sed tincidunt neque. Phasellus at finibus dui. Nunc nec sapien sed ante pharetra tristique eget eu velit.',
        user_id: 1,
        post_id: 7
    },
    {
        comment_text: 'Sed interdum dictum odio, et consectetur justo posuere sit amet. Aliquam consequat luctus dictum. Sed suscipit in erat eu luctus. Vestibulum a lorem at turpis.',
        user_id: 20,
        post_id: 7
    },
    {
        comment_text: ' Integer sit amet commodo ex. Etiam feugiat pretium porttitor. Ut sem mauris, malesuada non dignissim sit amet, ultricies vel.',
        user_id: 19,
        post_id: 7
    },
    {
        comment_text: 'Viverra lobortis. Quisque nec nibh ullamcorper, maximus ex non, pulvinar ligula. Aenean tempus.',
        user_id: 18,
        post_id: 8
    },  
    {  
        comment_text: 'Ien eget aliquet. Sed blandit varius dolor eget mollis. Aliquam erat volutpat. Nulla eu.',
        user_id: 17,
        post_id: 8
    },
    {
        comment_text: 'Ornare magna. Suspendisse ac quam tempus augue volutpat rhoncus. Fusce ac justo vitae ligula.',
        user_id: 16,
        post_id: 8
    },  
    {  
        comment_text: 'Sed ornare eleifend nulla id faucibus. . Sed rhoncus dignissim pellentesque. ursus ante blandit ut. Morbi vitae luctus tellus. Nam eu arcu at erat imperdiet.',
        user_id: 15,
        post_id: 9
    },  
    {  
        comment_text: 'Sed nunc leo, feugiat nec mauris id, euismod convallis quam. Fusce sit amet titae pellentesque eu, rutrum id orci.',
        user_id: 14,
        post_id: 9
    },  
    {  
        comment_text: 'Suspendisse in aliquam nisi. In facilisis nisi nec felis lobortis dapibus. Inretium porttitor. Ut sem mauris, malesuada non dignissim sit amet, ultricies vel.',
        user_id: 13,
        post_id: 9
    },  
    {  
        comment_text: 'Sed ornare eleifend nulla id faucibus. Fusce efficitur sapien sed rhoncus vol Vestibulume blandit ut. Morbi vitae luctus tellus. Nam eu arcu at erat imperdiet.',
        user_id: 12,
        post_id: 10
    },  
    {  
        comment_text: 'Morbi quis dolor elit. Donec sagittis in mi non luctus. Suspendisse porttitorros, quis fiquet ex id porttitor cursus. Morbi.',
        user_id: 11,
        post_id: 10
    },  
    {  
        comment_text: 'Nunc tortor turpis, laoreet non tellus eu, pretium fermentum sapien. Mauris a venenatis ate vitae enim nec, facilisis eleifend ligula. Donec enim elit, vestibulum.',
        user_id: 10,
        post_id: 10
    },  

    {  
        comment_text: 'In vel euismod nibh. Vestibulum dignissim tincidunt nisl vel tempus. Nulla sees purus. Curabitur consequat eros nisl, nec finibus nunc sagittis id. Nam a.',
        user_id: 9,
        post_id: 11
    },  
    {  
        comment_text: 'Pellentesque posuere tortor id sem laoreet sodales. Pellentesque at faucib lementum suscipit. Integer congue magna quis dapibus tempor. Morbi elementum finibus justo eu sagittis. Ut at lobortis metus, ut efficitur purus. Sed non erat ipsum. Sed.',
        user_id: 8,
        post_id: 11
    },  
    {  
        comment_text: 'Sed interdum dictum odio, et consectetur justo posuere sit amet. Aliquam consequat luctus dictum. Sed suscipit in erat eu luctus. Vestibulum a lorem at turpis.',
        user_id: 7,
        post_id: 11
    },  

    {  
        comment_text: 'Fusce efficitur sapien sed rhoncus  Vobibulum placerat erat tellus, posuere cursus ante blandit ut. Morbi vitae luctus tellus. Nam eu arcu at erat imperdiet.',
        user_id: 6,
        post_id: 12
    },  
    {  
        comment_text: 'Morbi tempus lectus sapien, ac sollicitudin neque convallis ac. Praesent porta ipsum eget molestie dapibus. Nunc neque dui, venenatis a.',
        user_id: 5,
        post_id: 12
    },  
    {  
        comment_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula, justo a auctor iaculis.',
        user_id: 4,
        post_id: 12
    },  
    {  
        comment_text: 'Sed ornare eleifend nulla id faucibus. Vestibulum placerat erat tellus, posuere cursus ante blandit ut. Morbi vitae luctus tellus. Nam eu arcu at erat imperdiet.',
        user_id: 3,
        post_id: 13
    },  
    {  
        comment_text: 'Morbi tempus lectus sapien, ac sollicitudin neque convallis ac. Praesent porta ipsum eget molestie dapibus. Nunc neque dui, venenatis a.',
        user_id: 2,
        post_id: 13
    },  
    {  
        comment_text: 'Vestibulum semper mattis lacus a mattis. Phasellus tincidunt ultrices nibh, in pretium tortor pretium sit amet. Morbi ac justo quis enim egestas malesuada.',
        user_id: 1,
        post_id: 13
    },  
    {  
        comment_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Phasellus vehicula, justo a auctor iaculis.',
        user_id: 2,
        post_id: 14
    },  
    {  
        comment_text: 'Sed nunc leo, feugiat nec mauris id, euismod convallis quam. Fusce sit amet tristique ipsum. Nulla massa nibh, mollis vitae pellentesque eu, rutrum id orci.',
        user_id: 4,
        post_id: 14
    },  
    {  
        comment_text: 'Nunc tortor turpis, laoreet non tellus eu, pretium fermentum sapien. Cras velit libero, vulputate vitae enim nec, facilisis eleifend ligula. Donec enim elit, vestibulum.',
        user_id: 6,
        post_id: 14
    },  

    {  
        comment_text: 'Morbi tempus lectus sapien, ac sollicitudin neque convallis ac. Praesent porta ipsum eget molestie dapibus. Nunc neque dui, venenatis a.',
        user_id: 8,
        post_id: 15
    },  
    {  
        comment_text: 'Odio justo, viverra vitae odio eu, placerat consectetur justo.',
        user_id: 10,
        post_id: 15
    },  
    {  
        comment_text: 'Sed vel tristique nisi. Nam faucibus urna nunc, ac posuere libero.',
        user_id: 12,
        post_id: 15
    }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
