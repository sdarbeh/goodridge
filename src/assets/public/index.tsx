import { preloadImages } from '../../utils/helpers/methods'

const assets = '/assets'

export const fav_icon = `${assets}/logo/moji_m.png`
export const test_image = '/assets/media/test/test_image.png'
export const like_animation_image = '/assets/media/animation/web_heart_animation.png'
export const question_image = '/assets/media/error/question-icon.png'

export const moji_loaders = [
    {
        name: 'Moji loader 1',
        src: '/assets/mojis/loader/moji_loader1.png'
    },
    {
        name: 'Moji loader 2',
        src: '/assets/mojis/loader/moji_loader2.png'
    },
    {
        name: 'Moji loader 3',
        src: '/assets/mojis/loader/moji_loader3.png'
    }
]

export const moji_activities = [
    {
        name: 'Moji sun',
        src: '/assets/mojis/activity/moji_sun.png'
    },
    {
        name: 'Moji sunset',
        src: '/assets/mojis/activity/moji_sunset.png'
    },
    {
        name: 'Moji night',
        src: '/assets/mojis/activity/moji_night.png'
    }
]

export const moji_selfies = [
    {
        name: 'Moji cheese',
        src: '/assets/mojis/selfie/moji_cheese.png'
    },
    {
        name: 'Moji big cheese',
        src: '/assets/mojis/selfie/moji_big_cheese.png'
    },
    {
        name: 'Moji creep',
        src: '/assets/mojis/selfie/moji_creep.png'
    },
    {
        name: 'Moji excited',
        src: '/assets/mojis/selfie/moji_excited.png'
    },
    {
        name: 'Moji hooray',
        src: '/assets/mojis/selfie/moji_hooray.png'
    },
    {
        name: 'Moji smile',
        src: '/assets/mojis/selfie/moji_smile.png'
    },
]

export const preloadMojies = () => {
    let arr = []
    for (const img in moji_selfies) {
        arr.push(moji_selfies[img].src)
    }
    for (const img in moji_activities) {
        arr.push(moji_activities[img].src)
    }
    preloadImages(arr)
}

export const moji_err = {
    404: '/assets/mojis/error/404.png',
    err: '/assets/mojis/error/moji_err.png'
}

export const resumePDF = '/assets/SamDarbehResume.pdf'