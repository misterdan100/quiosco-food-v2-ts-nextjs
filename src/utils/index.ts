export function formatCurrency(amount: number) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount)
}

export function formatName(name: string): string {
    const arrayName = name.trim().split(' ')
    let result: string[] = []
    for(let i of arrayName) {
        if(i !== '') {
            const splitName = i.trim().split('')
            splitName[0] = i[0].toUpperCase()
            result.push(splitName.join(''))
        }
    }
    return result.join(' ')
}

export function getImagePath(imagePath: string) {
    const cloudinaryBaseUrl = 'https://res.cloudinary.com'
    if(imagePath.startsWith(cloudinaryBaseUrl)) {
        return imagePath
    } else {
        return `/products/${imagePath}.jpg`
    }
}