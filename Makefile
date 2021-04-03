.PHONY : all tests doc

all:
	gprbuild -j0 -P asfml.gpr

tests:
	$(MAKE) -C tests

doc:
	gnatdoc -P asfml.gpr
