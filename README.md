![Atl F4 Landing Page](https://github.com/ALT-FOUR/alt-f4-website/blob/main/src/assets/img/Landing-Page.png)

## Building from Source 🏗️
1. **Fork the repository**

- Then go to your repository and find Alt-f4-website

2. **Clone the repository**

```bash
git clone https://github.com/{your username}/alt-f4-website.git
```

3. **Pull in project dependencies**

```bash
npm install
```

4. **Host the app locally**

```bash
npm run start
```

## Sync your fork with the original Git repo
- If you list the configured remote repository you will only see your fork as origin:
```
git remote -v
origin  https://github.com/YOUR_USERNAME/YOUR_FORK.git (fetch)
origin  https://github.com/YOUR_USERNAME/YOUR_FORK.git (push)
```
1. **Add a new remote upstream repository**
```
git remote add upstream https://github.com/ALT-FOUR/alt-f4-website.git
```
- You can now see both the original repository and the fork
```
git remote -v
origin    https://github.com/YOUR_USERNAME/YOUR_FORK.git (fetch)
origin    https://github.com/YOUR_USERNAME/YOUR_FORK.git (push)
upstream  https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git (fetch)
upstream  https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git (push)
```
2. **Sync your fork**
- Be sure your in the root of your project and also in the main branch
```
git checkout main
Switched to branch 'main'
```
- Now you have to fetch the changes from the original repo
```
git fetch upstream
```
- And merge the changes in your main branch
```
git merge upstream/main
```







