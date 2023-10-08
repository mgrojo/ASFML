.PHONY : all build tests doc clean

all: build tests doc

build:
	gprbuild -j0 -P asfml.gpr

tests:
	$(MAKE) -C tests

doc:
	gnatdoc -P asfml.gpr

clean:
	gprclean -P asfml.gpr
