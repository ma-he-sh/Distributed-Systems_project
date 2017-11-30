# Spark batch setup

## Installation

1. Install Spark dependencies

	Java (at time of initial setup, our version was "1.8.0_151")
	```sh
	sudo apt-get install default-jdk
	sudo apt-get install maven
	```

2. Download Spark binaries into `~/server` directory (we tested on version 1.6.3)
	```
	cd ~
	mkdir server
	cd server
	wget http://<spark download link>/spark-1.6.3-bin-hadoop2.6.tgz
	```

3. Extract the files
	```sh
	tar -xzvf spark-1.6.3-bin-hadoop2.6.tgz
	```

## Running the WordCount program

The WordCount program is a simple Spark program, and was created using the tutorial found [here](http://www.freblogg.com/2016/06/spark-word-count-with-java.html).

1. Put `shakespeare.txt` into the home folder
2. Create a directory in the home folder called `wordcountSrc`
3. Put these files into the `wordcountSrc` folder: `pom.xml`, `build.sh`
4. Put the `src` folder into the `wordcountSrc` folder.
5. Run `build.sh`. This will build the Maven project.
6. Place the `run-batch.sh` file into the `~/server/spark-1.6.3-bin-hadoop2.6` directory.
7. Run the `run-batch.sh` file.