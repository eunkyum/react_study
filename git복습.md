git이란?
형상 관리 소프트웨어/버전관리 소프트웨어

git 기초 사용법
1. 버전으로 관리하고 싶은 디렉터리에 git을 설치한다.
git init
- git init을 하고 나면 디렉터리 내에 `.git` 디렉터리가 생성된다.
- 이 디렉터리 안에 버전들에 대한 수많은 정보가 저장되게 된다.

2. 파일을 변경한 후에는 습관적으로 `git status`를 입력하여 상태를 확인한다.
3. 저장하고 싶은 파일 또는 디렉터리들을 `git add` 명령어로 선별하여 stage 상태로 만든다.
4. stage상태에 올라온 파일 또는 디렉터리들을 git commit 명령어로 버전화한다.

## 로컬 저장소와 원격 저장소

## 로컬 저장소(local repository)
- 내 컴퓨터의 현재 작업중인 (.git이 들어있는) 디렉터리

### 원격 저장소(remote repository)
- 로컬 저장소를 백업해 둔 곳(지구 어딘가에 있는...)
- 대표적으로 깃헙(github)이 있다.

#### 원격 저장소 사용 관련한 명령어

```
git remote add origin 원격저장소의 주소
```

```
git push origin main
```



## 명령어 정리
- `git checkout`: 일종의 타임머신
