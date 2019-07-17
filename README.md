
## Quest


daemon (deɪmən) n—A computer program that runs continuously
in the background and performs specified operations at predefined times or
in response to certain events.

Condensed from “Disk and Execution MONitor”

Quest(QST) is an experimental digital currency that enables unlinkable and
untraceable instant payments. Quest uses peer-to-peer technology to operate 
without any central authority. Transactions are carried out collectively by the
network.

The Quest project is launched based on the hard work and continuous effort of
the Cryptonote developers. We are eternally grateful to you for your efforts and
diligence in making a secure network and for your support of free and open
source software development. The Quest experiment is made on the foundation
you built.

Target block time: 60s
Money supply: 21000000000000000 atomic units.
One atomic unit is called one Sobol
Emission speed Factor = 21
The current Block Reward is about 100 Quest and will decrease with an
emission speed factor of 21.
P2P_DEFAULT_PORT                  = 62518
RPC_DEFAULT_PORT                  = 62519


QST is a mineable cryptocurrency. There is no ICO, no pre-mining,
no masternode and no airdrop. The project comes without any warranty whatsoever.

Quest is an open source project without any central authority.
We invite everyone to contribute to it.

Do not trust anybody on the internet. If you run code which is not free,
you do not own your computer. This is why we ask you to build the Quest daemon
from source by yourself.

Let us build the Darknet together.

## Building Quest

### On *nix

Dependencies: GCC 4.7.3 or later, CMake 2.8.6 or later, and Boost 1.55.

You may download them from:

* http://gcc.gnu.org/
* http://www.cmake.org/
* http://www.boost.org/
* Alternatively, it may be possible to install them using a package manager.

To build, change to a directory where this file is located, and run `make`. The resulting executables can be found in `build/release/src`.

**Advanced options:**

* Parallel build: run `make -j<number of threads>` instead of `make`.
* Debug build: run `make build-debug`.
* Test suite: run `make test-release` to run tests in addition to building. Running `make test-debug` will do the same to the debug version.
* Building with Clang: it may be possible to use Clang instead of GCC, but this may not work everywhere. To build, run `export CC=clang CXX=clang++` before running `make`.

### On Windows
Dependencies: MSVC 2013 or later, CMake 2.8.6 or later, and Boost 1.55. You may download them from:

* http://www.microsoft.com/
* http://www.cmake.org/
* http://www.boost.org/

To build, change to a directory where this file is located, and run these commands:
```
mkdir build
cd build
cmake -G "Visual Studio 12 Win64" ..
```

And then do Build.


With ` ./Questd ` start the daemon, with `sudo ./simplewallet` you can generate a wallet, 
mine and make transactions.   

Matthew A. Sobol, 07.18.2019
