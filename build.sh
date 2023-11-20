#!/usr/bin/env bash

build () {
	src=$1
	dest=$2
	echo "building..."

	#create dest directory if not exist
	if [ ! -d "${dest}" ]
	then
		mkdir "${dest}"
	fi

	#compile css
	npx tailwindcss -i "${src}/assets/style.css" -o "${dest}/style.css" -m

	#build js
	esbuild "${src}/main.ts" --bundle --minify --outfile="${dest}/script.js"

	#minify html
	npx html-minifier --remove-comments --collapse-whitespace --remove-tag-whitespace "${src}/index.html" -o "${dest}/index.html"

	#copy assets to dest directory
	cp -rf "${src}/assets/img" "${dest}"
	#start http server
	http-server "${dest}" -c 1 -s &

	echo "done..."
}

if [ $# -lt 2 ]
then
	echo "Usage: build source_dir destination_dir"
	exit
fi

build $1 $2

src_hash=$(ls -R -l --full-time $1 | sha256sum)

while [ [1=1] ]
do
	tmp_hash=$(ls -R -l --full-time $1 | sha256sum)

	if [ "${src_hash}" != "${tmp_hash}" ]
	then
		build $1 $2
	fi

	src_hash="${tmp_hash}"
	sleep 1
done
