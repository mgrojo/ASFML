.PHONY : all tests doc clean

all:
	gprbuild -j0 -P asfml.gpr

tests:
	$(MAKE) -C tests

doc:
	gnatdoc -P asfml.gpr

clean:
	gprclean -P asfml.gpr
