

texFile="source.tex"
touch $texFile

cat<<EOF >$texFile
\documentclass[a4paper,landscape]{report}
\RequirePackage{listings}
\RequirePackage[usenames,dvipsnames]{color}
\RequirePackage[colorlinks=true,linkcolor=blue]{hyperref} 
\RequirePackage{geometry}
\lstdefinestyle{customasm}{
	belowcaptionskip=1\baselineskip,
	breaklines=true,
	basicstyle=\footnotesize\ttfamily,
	xleftmargin=.04\textwidth,
	numbers=left
}        
\geometry{a4paper, margin=1.6cm}
\pagenumbering{gobble}
\begin{document}
EOF

find . \( \
	\( \
		-name "*.jsx" -or -name "*.js" -or -name "*.coffee" \             # These are the file
		-or -name "*.scss" -or -name "*.xml" -or -name "*.json" \        # types I care about
		-or -name ".gitignore" -or -name "*.gradle" -or -name "*.sh" \   # for my project.
	\) \
	-and -not -path "*datasets*" \    # Ignore everything in the datasets folder
	-and -not -name "*src2pdf*" \     # Ignore this file
	\) \
	-printf '%h\0%d\0%p\n' \
	| sort -t '\0' -n \
	| awk -F '\0' '{print $3}' \
	| sort \
	| sed 's/^\..//' \
	| while read fileName; do
		cleanName=$(echo $fileName | sed 's/_/\\_/g')
		echo "\newpage" >> $texFile
		echo "\textbf{$cleanName}" >> $texFile
		echo "\lstinputlisting[style=customasm]{$fileName}" >> $texFile
done

echo "\end{document}" >> $texFile
pdflatex $texFile -output-directory .
pdflatex $texFile -output-directory .
