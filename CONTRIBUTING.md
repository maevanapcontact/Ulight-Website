# Contributing

When contributing to this repository, please first discuss the change you wish to make via **issue**, or with all the team in the **#Ulight channel** of Slack (Recipients of Google Developer Challenge Scholarship only).

Please note we have a **code of conduct**, please follow it in all your interactions with the project.

To contribute to the Website, you are in the right place.

To contribute to the Framework, please visite the [Ulight repository](https://github.com/maevanapcontact/Ulight).


## I am afraid to contribute...

This project is made for and by **beginners**. Don't be afraid to make any mistake, nobody will judge you here as we are all here to learn :)

The main goal is to **learn altogether** by using a concrete and fun project. It is a quite big one yes, but it is all about the challenge to do this kind of project, to motivate us do **work on community** and on an Open Source project.

If you are afraid to contribute, you can come to speak with us on the #Ulight channel of Slack and share your fears.

You don't have to create a great advanced code to contribute, but even a small one, **you can correct a typo or add comments if you think those are needed.**

We will never close your pull request without **explaning to you** why we do that. But we will preferably discuss with you about your pull request and help you correct your mistakes if you made some :)


As we are all beginners, the **project maintainers are also beginners**. So we can make mistakes as well :)

If you think we have made a mistake, do not hesitate to tell us in order to upgrade the quality of this project!


If you have never made any pull request on your life, **you are in the right place.** You can try to make your first one with us.

**You can also check this great repository from [Syknapse](https://github.com/Syknapse/Contribute-To-This-Project) to learn how to contribute on GitHub!**

## What should I do?

You will find all tasks to do into the [Issues](https://github.com/maevanapcontact/Ulight-Website/issues) page. 
Each of them are **labelled**, that means you can filter them depending of your field of interest.
*For instance, you will have the labels: front-end, design…*
**Hint**: you can start by the "good first issue" one, they are perfect for beginners

Then, when you **choose** an issue, click on it and you will have **more info** about it.
There, you can ask question or comment.
If you want to do this task: **assign yourself** to it, by clicking next to « Assignees » and choosing your name.

Now, it’s up to you! 
You can find more info about how issues work at this [link](https://guides.github.com/features/issues/).
Let’s found out how to do in the next part.

## Pull Request Process

- [Install Git](https://git-scm.com/downloads)

Here are some tutorials to help you **install and use Git** ([basic commands](https://try.github.io/levels/1/challenges/1) or [full tutorial](https://www.slideshare.net/IslamSayed18/github-tutorial-83175509))
- **Fork** the project (Here is a [tutorial about Fork](https://help.github.com/articles/fork-a-repo/))
- **Create a new folder** in your computer to welcome the project from GitHub
- Open the **Git console** and navigate inside your computer, positioned yourself on the new folder you have created
- **Clone your fork** of the repository in your current folder using this command:

```
git clone https://github.com/<your-github-pseudo>/Ulight-Website.git
```

You can find this link following those steps:
1. Go to your **GitHub profile**
2. Go to your **fork** of the Project
3. Press **"Clone or download"**
4. **Copy/ paste the URL** using HTTPs (Not SSH)
- Navigate inside the new folder that had been created using this command:

```
cd Ulight-Website
```

- Set the **remote upstream** to the original repository using this command:

```
git remote add upstream https://github.com/maevanapcontact/Ulight-Website.git
```

- Be sure to be **up-to-date** with your version of the repository with those commands:

```
git checkout ulight-website-dev
git pull upstream ulight-website-dev
```

For more information about remotes check [this tutorial](https://help.github.com/articles/adding-a-remote/)


- Create a **new branch** to make your own changes, check those [Udacity Guidelines Git](https://udacity.github.io/git-styleguide/) to know how to create good commits name.

```
git checkout -b name-of-your-branch
```

- **It is the time to open your text editor and to start working on your changes!**

When you are ready to submit your work, then continue.

- Locally **rebase the upstream branch** into the branch you have created to do your changes by using this command:

```
git pull --rebase upstream ulight-website-dev
```

- **Push your work** (on your new branch) in your own fork of the project using this command:

```
git push origin name-of-your-branch
```

- Open a **Pull Request** to submit your work. Be sure to propose it into the branch ulight-website-dev.

Here is a [tutorial about Pull Requests](https://help.github.com/articles/creating-a-pull-request/)


## Guidelines

For the consistency of this project, the following guides need to be followed.

**If you submit a Pull Request that doesn't follow those guidelines we won't be able to accept it, but we will give you feedback on the conversation!**

- [HTML Guidelines](https://udacity.github.io/frontend-nanodegree-styleguide/)
- [CSS Guidelines](https://udacity.github.io/frontend-nanodegree-styleguide/css.html)
- [JavaScript Guidelines](https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html)
- [Git Guidelines](https://udacity.github.io/git-styleguide/)


### If you write SCSS...

Please **compile** your scss code before submitting your pull request. You can use [Prepros](https://prepros.io/) which is really easy to use. You can check the [SASS Tutorial from The Net Ninja](https://www.youtube.com/watch?v=b0d--jixRwg&index=2&list=PL4cUxeGkcC9iEwigam3gTjU_7IA3W2WZA) to see how Prepros works.

Use the following syntax if you create any new SCSS file "\_name-of-your-file.scss"

And import it on the _style.scss_ file using the code:

```
@import 'name-of-your-file'
```

**DO NOT WRITE CSS DIRECTLY! THE FILE IS GENERATED AUTOMATICALLY**


## Code of Conduct

### Our Pledge

In the interest of fostering an open and welcoming environment, we as contributors and maintainers pledge to making participation in our project and our community a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation.


### Our Standards

Examples of behavior that contributes to creating a positive environment include:

- Using welcoming and inclusive language
- Being respectful of differing viewpoints and experiences
- Gracefully accepting constructive criticism
- Focusing on what is best for the community
- Showing empathy towards other community members


Examples of unacceptable behavior by participants include:

- The use of sexualized language or imagery and unwelcome sexual attention or advances
- Trolling, insulting/derogatory comments, and personal or political attacks
- Public or private harassment
- Publishing others' private information, such as a physical or electronic address, without explicit permission
- Other conduct which could reasonably be considered inappropriate in a professional setting


### Our Responsibilities

Project maintainers are responsible for clarifying the standards of acceptable behavior and are expected to take appropriate and fair corrective action in response to any instances of unacceptable behavior.

Project maintainers have the right and responsibility to remove, edit, or reject comments, commits, code, wiki edits, issues, and other contributions that are not aligned to this Code of Conduct, or to ban temporarily or permanently any contributor for other behaviors that they deem inappropriate, threatening, offensive, or harmful.


### Scope

This Code of Conduct applies both within project spaces and in public spaces when an individual is representing the project or its community. Examples of representing a project or community include using an official project e-mail address, posting via an official social media account, or acting as an appointed representative at an online or offline event. Representation of a project may be further defined and clarified by project maintainers.


### Enforcement

Instances of abusive, harassing, or otherwise unacceptable behavior may be reported by contacting the project team at [maevanap.contact@gmail.com](maevanap.contact@gmail.com). All complaints will be reviewed and investigated and will result in a response that is deemed necessary and appropriate to the circumstances. The project team is obligated to maintain confidentiality with regard to the reporter of an incident. Further details of specific enforcement policies may be posted separately.

Project maintainers who do not follow or enforce the Code of Conduct in good faith may face temporary or permanent repercussions as determined by other members of the project's leadership.


### Attribution

This Code of Conduct is adapted from the Contributor Covenant, version 1.4, available at http://contributor-covenant.org/version/1/4
