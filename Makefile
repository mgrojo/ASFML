# We need old gnatdoc to generate documentation
GNATDOC_PREFIX := $(HOME)/local/gnat-2021

.PHONY : all build tests doc clean

all: build tests doc

build:
	gprbuild -j0 -P asfml.gpr

tests:
	$(MAKE) -C tests

doc:
	$(GNATDOC_PREFIX)/bin/gnatdoc -P asfml.gpr

clean:
	gprclean -P asfml.gpr
