angular.module('apiary.common', [])
    .constant('LoginAuths', {
        'google': {
            'clientId': '1062484540187-9vkejq16ec2ladmu7cn0gk0cesj7dfla.apps.googleusercontent.com',
            'clientSecret': 'iV3LwUqsaXlfddN5JbM_c7U5'
        },
        'facebook': {
            'clientId': '159318631179311',
            'clientSecret': '982a3518aae3df5ecb6eebb8ccaf0514'
        }
    })
    .constant('APIServer',
    {
        'url': 'http://dkitestawsexample-env.us-east-1.elasticbeanstalk.com/api/'
    });