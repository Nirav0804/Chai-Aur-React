export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Nirav0804')
    return response.json();
}