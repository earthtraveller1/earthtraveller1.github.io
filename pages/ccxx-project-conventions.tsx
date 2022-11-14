import Head from "next/head";

export default function CCXXProjectConventions() {
    return (
        <>
            <Head>
                <title>C/C++ Project Conventions</title>
            </Head>

            <h1>C/C++ Project Conventions</h1>

            <p>
                This document will briefly describe the project organisation conventions that are
                used by <a href="https://github.com/earthtraveller1">earthtraveller1</a>. It is meant to act as
                a contract between earthtraveller1 and any contributor(s) hoping to collaborate with
                them. This is by no means a formal or legal contract but rather more of a guideline to maintain
                consistency across earthtraveller1's projects.
            </p>

            <h2>Organizational Structure</h2>

            <p>
                Below lists the common organisational structure of a typical C/C++ project.
            </p>

            <ul>
                <li><code>src</code> contains all of the source files (the <code>.c</code> and <code>.cpp</code> files) of the project.</li>
                <li><code>tools</code> contains all of the files regarding the toolchain (the build system, compiler, etc).</li>
                <li><code>deps</code> contains all of the dependencies of the project that can be bundled with it. It is recommended to include all project dependencies as submodules under the <code>deps</code> folder whenever possible.</li>
                <li><code>include</code> contains the header files that exposes a public API to any client(s). In projects that does not expose any public APIs, this folder should not exist, as all internally used header files should be placed under <code>src</code>.</li>
                <li><code>docs</code> must contain all of the HTML and webpages in a C/C++ repository, including GitHub Pages site files and documentation files, generated or hand written.</li>
                <li><code>misc</code> contain all of the files that does not belong in any other categories. This is to keep the source root clean of any random files.</li>
            </ul>

            <h3>Project Root</h3>

            <p>
                The project root directory is a rather special location, and therefore only specific files should belong in it. It is currently recommended to keep files out of the root directory
                whenever possible, but there are a few exceptions in which placing files in the root is either neccessary or expected common practice.
            </p>

            <ul>
                <li><code>README</code>, <code>LICENSE</code>, and other related files must be placed in the project root.</li>
                <li>Certain git configuration files (like <code>.gitignore</code>) should be placed in the project root.</li>
                <li>Build scripts (<code>Makefile</code>s, <code>CMakeLists.txt</code>s, etc) should be placed in the project root. It is possible to place them elsewhere, but the project root is typically where users of such build systems expects the build script to be.</li>
            </ul>

            <p>
                Please avoid placing miscellaneous files in the project root. Doing so clutters up the project root. There is a specific folder for miscellaneous files.
            </p>

            <p>
                In summary, do not place any files in the project root unless it is functionally required to do so, or if it fits the exceptions listed above.
            </p>
        </>
    )
}