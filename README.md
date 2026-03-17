1.克隆到本地
在git bush中输入：
cd 你想克隆到的地方
git clone https://github.com/y7hl/2026third-igem-team

2.修改代码
进入文件夹
git pull origin main
拉取代码，避免覆盖其他人的修改

# 查看改了哪些文件
git status

# 添加所有改动
git add .
也可以把 .改成修改的文件的路径

# 提交（写清楚你做了什么）
git commit -m "feat(team): add Wang Wu to team page"

# 推送
git push origin main

更安全的方式：
# 创建自己的分支
git checkout -b feature/add-my-bio

# 修改、add、commit
git add .
git commit -m "feat: add my bio"

# 推送分支
git push origin feature/add-my-bio